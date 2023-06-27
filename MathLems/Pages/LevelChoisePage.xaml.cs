namespace MathLems.Pages;

public partial class LevelChoisePage : ContentPage
{
	public LevelChoisePage()
	{
		InitializeComponent();
	}
    private async void OnContinueClicked(object sender, EventArgs e)
    {
        await Shell.Current.GoToAsync(nameof(ProblemPage));
    }
}