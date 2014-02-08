Imports System
Public Class Salutation

    Public Property Greeting As String
    Public Property Farewell As String

    Public Sub New()
        MyClass.New("Hello", "Goodbye")
    End Sub

    Public Sub New(ByVal greeting As String, ByVal farewell As String)
        Me.Greeting = greeting
        Me.Farewell = farewell
    End Sub

    ''' <summary>
    ''' Mainline
    ''' </summary>
    ''' <param name="args"></param>
    ''' <remarks></remarks>
    Public Shared Sub Main(ByVal args As String())
        Dim WalmartGreeter As New Salutation("Welcome to Walmart(TM)", "Thank you for shopping at Walmart(TM)")
        Dim KlingonCommander As New Salutation("nuqneH?", "Qapla'")

        Console.WriteLine(WalmartGreeter.Greeting)
        Console.WriteLine(WalmartGreeter.Farewell)
        Console.WriteLine()
        Console.WriteLine(KlingonCommander.Greeting)
        Console.WriteLine(KlingonCommander.Farewell)
    End Sub
End Class