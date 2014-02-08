public class Salutation
{

    private String greeting;
	public String getGreeting() { return greeting; }
	public String setGreeting(String value) { greeting = value; }
    private String farewell;
	public String getFarewell() { return farewell; }
	public String setFarewell(String value) { farewell = value; }

    public Salutation()
    {
		this("Hello", "Goodbye")
    }

    public Salutation(string greeting, string farewell)
    {
        this.Greeting = greeting;
        this.Farewell = farewell;
    }

    public static void Main(string[] args)
    {
        Salutation walmartGreeter = new Salutation("Welcome to Walmart(TM)", "Thank you for shopping at Walmart(TM)");
        Salutation klingonCommander = new Salutation("nuqneH?", "Qapla'");

        System.out.println(walmartGreeter.Greeting);
        System.out.println(walmartGreeter.Farewell);
        System.out.println();
        System.out.println(klingonCommander.Greeting);
        System.out.println(klingonCommander.Farewell);
    }
}
