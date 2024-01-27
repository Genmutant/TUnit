﻿using System.Collections.Immutable;

namespace TUnit.Core;

/// <summary>
/// Contains a collection of tests that can be run. Should be disposed to ensure that the
/// temporary <see cref="AppDomain"/> containing the test assemblies is unloaded.
/// </summary>
public sealed class TestCollection
{
    private readonly AssembliesAnd<TestDetails> _assembliesAndTestDetails;

    /// <summary>
    /// The test sources (assembly file names).
    /// </summary>
    public IReadOnlyList<string> Sources { get; }

    /// <summary>
    /// The tests that were discovered.
    /// </summary>
    public IReadOnlyList<TestDetails> Tests { get; private set; }

    public TestCollection(IEnumerable<string> sources, AssembliesAnd<TestDetails> assembliesAndTestDetails)
    {
        _assembliesAndTestDetails = assembliesAndTestDetails;
        Sources = ImmutableArray.CreateRange(sources);
        Tests = ImmutableArray.CreateRange(assembliesAndTestDetails.Values);
    }

    /// <summary>
    /// Filters the tests in the test collection. This is used for partial test runs.
    /// </summary>
    /// <param name="filter">The filter to apply.</param>
    public void Filter(Func<TestDetails, bool> filter)
    {
        Tests = ImmutableArray.CreateRange(Tests.Where(filter));
    }
}