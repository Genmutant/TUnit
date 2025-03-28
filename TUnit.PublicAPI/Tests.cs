﻿using System.Reflection;
using System.Text;
using PublicApiGenerator;
using TUnit.Assertions;
using TUnit.Assertions.Extensions;

namespace TUnit.PublicAPI;

public class Tests
{
    [Test]
    public Task Core_Library_Has_No_API_Changes()
    {
        return VerifyPublicApi(typeof(TestAttribute).Assembly);
    }
    
    [Test]
    public Task Engine_Library_Has_No_API_Changes()
    {
        return VerifyPublicApi(typeof(Engine.Services.TUnitRunner).Assembly);
    }
    
    [Test]
    public Task Assertions_Library_Has_No_API_Changes()
    {
        return VerifyPublicApi(typeof(Assertions.Assert).Assembly);
    }
    
    [Test]
    public Task Playwright_Library_Has_No_API_Changes()
    {
        return VerifyPublicApi(typeof(Playwright.PageTest).Assembly);
    }

    private async Task VerifyPublicApi(Assembly assembly)
    {
        var publicApi = assembly.GeneratePublicApi();

        await Verify(publicApi)
            .AddScrubber(sb => Scrub(sb))
            .OnVerifyMismatch(async (pair, message, verify) =>
            {
                var received = await FilePolyfill.ReadAllTextAsync(pair.ReceivedPath);
                var verified = await FilePolyfill.ReadAllTextAsync(pair.VerifiedPath);
                
                // Better diff message since original one is too large
                await Assert.That(Scrub(received)).IsEqualTo(Scrub(verified));
            })
            .UniqueForTargetFrameworkAndVersion(assembly);
    }
    
    private StringBuilder Scrub(StringBuilder text)
    {
        return text
            .Replace(".git\"", "\"");
    }
    
    private string Scrub(string text)
    {
        return Scrub(new StringBuilder(text)).ToString();
    }
}