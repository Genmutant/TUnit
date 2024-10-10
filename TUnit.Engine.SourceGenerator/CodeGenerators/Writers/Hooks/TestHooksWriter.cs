﻿using Microsoft.CodeAnalysis;
using TUnit.Engine.SourceGenerator.CodeGenerators.Helpers;
using TUnit.Engine.SourceGenerator.Enums;
using TUnit.Engine.SourceGenerator.Models;

namespace TUnit.Engine.SourceGenerator.CodeGenerators.Writers.Hooks;

internal static class TestHooksWriter
{
    public static void Execute(SourceProductionContext context, HooksDataModel model, HookLocationType hookLocationType)
    {
        var className = $"Hooks__{model.MinimalTypeName}";
        var fileName = $"{className}__{Guid.NewGuid():N}";

        using var sourceBuilder = new SourceCodeWriter();
                
        sourceBuilder.WriteLine("// <auto-generated/>");
        sourceBuilder.WriteLine("#pragma warning disable");
        sourceBuilder.WriteLine("using global::System.Linq;");
        sourceBuilder.WriteLine("using global::System.Reflection;");
        sourceBuilder.WriteLine("using global::System.Runtime.CompilerServices;");
        sourceBuilder.WriteLine("using global::TUnit.Core;");
        sourceBuilder.WriteLine("using global::TUnit.Core.Interfaces;");
        sourceBuilder.WriteLine();
        sourceBuilder.WriteLine("namespace TUnit.SourceGenerated;");
        sourceBuilder.WriteLine();
        sourceBuilder.WriteLine("[global::System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]");
        sourceBuilder.WriteLine($"file partial class {className}");
        sourceBuilder.WriteLine("{");
        sourceBuilder.WriteLine("[global::System.Runtime.CompilerServices.ModuleInitializer]");
        sourceBuilder.WriteLine("public static void Initialise()");
        sourceBuilder.WriteLine("{");

        if (hookLocationType == HookLocationType.Before)
        {
            sourceBuilder.WriteLine(
                $$"""
                  TestRegistrar.RegisterBeforeHook<{{model.FullyQualifiedTypeName}}>(new InstanceHookMethod<{{model.FullyQualifiedTypeName}}>
                          {
                               MethodInfo = typeof({{model.FullyQualifiedTypeName}}).GetMethod("{{model.MethodName}}", 0, [{{string.Join(", ", model.ParameterTypes.Select(x => $"typeof({x})"))}}]),
                               Body = (classInstance, testContext, cancellationToken) => AsyncConvert.Convert(() => classInstance.{{model.MethodName}}({{GenerateContextObject(model)}})),
                               HookExecutor = {{HookExecutorHelper.GetHookExecutor(model.HookExecutor)}},
                               Order = {{model.Order}},
                          });
                  """);
        }
        else if (hookLocationType == HookLocationType.After)
        {
            sourceBuilder.WriteLine(
                $$"""
                 TestRegistrar.RegisterAfterHook<{{model.FullyQualifiedTypeName}}>(new InstanceHookMethod<{{model.FullyQualifiedTypeName}}>
                         {
                              MethodInfo = typeof({{model.FullyQualifiedTypeName}}).GetMethod("{{model.MethodName}}", 0, [{{string.Join(", ", model.ParameterTypes.Select(x => $"typeof({x})"))}}]),
                              Body = (classInstance, testContext, cancellationToken) => AsyncConvert.Convert(() => classInstance.{{model.MethodName}}({{GenerateContextObject(model)}})),
                              HookExecutor = {{HookExecutorHelper.GetHookExecutor(model.HookExecutor)}},
                              Order = {{model.Order}},
                         });
                 """);
        }

        sourceBuilder.WriteLine("}");
        sourceBuilder.WriteLine("}");

        context.AddSource($"{fileName}.Generated.cs", sourceBuilder.ToString());
    }

    private static string GenerateContextObject(HooksDataModel model)
    {
        List<string> args = [];
        
        foreach (var type in model.ParameterTypes)
        {
            if (type == WellKnownFullyQualifiedClassNames.TestContext.WithGlobalPrefix)
            {
                args.Add("testContext");
            }
            
            if (type == WellKnownFullyQualifiedClassNames.CancellationToken.WithGlobalPrefix)
            {
                args.Add("cancellationToken");
            }
        }

        return string.Join(", ", args);
    }
}