using System;

public class Salutation
{

    public string Greeting { get; private set; }
    public string Farewell { get; private set; }

    public Salutation()
        : this("Hello", "Goodbye")
    {
    }

    public Salutation(string greeting, string farewell)
    {
        this.Greeting = greeting;
        this.Farewell = farewell;
    }

    /// <summary>
    /// Mainline
    /// </summary>
    /// <param name="args"></param>
    /// <remarks></remarks>
    public static void Main(string[] args)
    {
        Salutation WalmartGreeter = new Salutation("Welcome to Walmart(TM)", "Thank you for shopping at Walmart(TM)");
        Salutation KlingonCommander = new Salutation("nuqneH?", "Qapla'");

        Console.WriteLine(WalmartGreeter.Greeting);
        Console.WriteLine(WalmartGreeter.Farewell);
        Console.WriteLine();
        Console.WriteLine(KlingonCommander.Greeting);
        Console.WriteLine(KlingonCommander.Farewell);
    }
}
