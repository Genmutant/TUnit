﻿using TUnit.Assertions;
using TUnit.Assertions.Extensions;

namespace TUnit.TestProject.Bugs._2136;

public class Tests
{
    [Test]
    [Arguments(true, "True")]
    [Arguments(1, "1")]
    [Arguments(1.1, "1.1")]
    [Arguments("hello", "hello")]
    [Arguments(MyEnum.Item, "Item")]
    public async Task GenericArgumentsTest<T>(T value, string expected)
    {
        // Assert
        await Assert.That(value?.ToString()).IsEqualTo(expected);
    }
}

public enum MyEnum
{
    Item,
    Item2
}