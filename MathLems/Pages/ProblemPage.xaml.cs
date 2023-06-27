using MathLems.Framework.Models;

namespace MathLems.Pages;

public partial class ProblemPage : ContentPage
{
    Level level = new Level() { Name = "Nivell de test"};
	public ProblemPage()
	{
		InitializeComponent();
        BindingContext = new Problem() { 
        Statement = "statment", 
            Operation ="operation"};
	}

    private async void OnCheckClicked(object sender, EventArgs e)
    {
        await Shell.Current.DisplayAlert("Resposta", "Molt bè! l'has encertat","Acceptar");
        await Shell.Current.DisplayAlert("Resposta", "Continua així!", "Acceptar");
    }
}