namespace MathLems.Pages;

public partial class WorldPage : ContentPage
{
	public WorldPage()
	{
		InitializeComponent();
	}

    private async void Button_Clicked(object sender, EventArgs e)
    {
        await Shell.Current.GoToAsync(nameof(ProblemPage));
    }
}