﻿namespace TUnit.Core;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = true)]
public sealed class ClassDataSourceAttribute<T> : DataSourceGeneratorAttribute<T> where T : new()
{
    public SharedType Shared { get; set; } = SharedType.None;
    public string Key { get; set; } = string.Empty;
    public override IEnumerable<Func<T>> GenerateDataSources(DataGeneratorMetadata dataGeneratorMetadata)
    {
        yield return () =>
        {
            var item = ClassDataSources.Get(dataGeneratorMetadata.TestSessionId)
                .Get<T>(Shared, dataGeneratorMetadata.TestClassType, Key, dataGeneratorMetadata);

            dataGeneratorMetadata.TestBuilderContext.Current.Events.OnTestRegistered += async (obj, context) =>
            {
                await ClassDataSources.Get(dataGeneratorMetadata.TestSessionId).OnTestRegistered(
                    context.TestContext,
                    ClassDataSources.IsStaticProperty(dataGeneratorMetadata),
                    Shared,
                    Key,
                    item);
            };

            dataGeneratorMetadata.TestBuilderContext.Current.Events.OnInitialize += async (obj, context) =>
            {
                await ClassDataSources.Get(dataGeneratorMetadata.TestSessionId).OnInitialize(
                    context,
                    ClassDataSources.IsStaticProperty(dataGeneratorMetadata),
                    Shared,
                    Key,
                    item);
            };
            
            dataGeneratorMetadata.TestBuilderContext.Current.Events.OnTestStart += async (obj, context) =>
            {
                await ClassDataSources.Get(dataGeneratorMetadata.TestSessionId).OnTestStart(context, item);
            };
            
            dataGeneratorMetadata.TestBuilderContext.Current.Events.OnTestEnd += async (obj, context) =>
            {
                await ClassDataSources.Get(dataGeneratorMetadata.TestSessionId).OnTestEnd(context, item);
            };

            dataGeneratorMetadata.TestBuilderContext.Current.Events.OnTestSkipped += async (obj, context) =>
            {
                await ClassDataSources.Get(dataGeneratorMetadata.TestSessionId).OnDispose(context, Shared, Key, item);
            };
            
            dataGeneratorMetadata.TestBuilderContext.Current.Events.OnDispose += async (obj, context) =>
            {
                await ClassDataSources.Get(dataGeneratorMetadata.TestSessionId).OnDispose(context, Shared, Key, item);
            };
            
            return item;
        };
    }
}