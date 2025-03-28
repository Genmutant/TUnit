﻿namespace TUnit.Assertions.Extensions;

public static class StringExtensions
{
    public static string GetStringOrEmpty(this string? value)
    {
        return GetStringOr(value, string.Empty);
    }
    
    public static string GetStringOr(this string? value, string defaultValue)
    {
        return value ?? defaultValue;
    }

    public static string ReplaceNewLines(this string value)
    {
        return value.Replace("\r\n", " ")
            .Replace("\n", " ")
            .Replace("\r", " ");
    }

    public static string ShowNewLines(this string value)
    {
        return value.Replace("\n", "\\n").Replace("\r", "\\r");
    }

    public static string TruncateWithEllipsis(this string value, int maxLength)
    {
        if (Environment.GetEnvironmentVariable("TUNIT_ASSERTIONS_DISABLE_TRUNCATION") == "true")
        {
            return value;
        }
        
        if (value.Length <= maxLength)
        {
            return value;
        }

        const char ellipsis = '\u2026';
        return $"{value[..maxLength]}{ellipsis}";
    }

    public static string PrependAOrAn(this string value)
    {
        char[] vocals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        if (value.Length > 0 && vocals.Contains(value[0]))
        {
            return $"an {value}";
        }
        return $"a {value}";
    }
}