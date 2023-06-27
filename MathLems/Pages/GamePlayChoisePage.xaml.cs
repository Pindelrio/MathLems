namespace MathLems.Pages;

public partial class GamePlayChoisePage : ContentPage
{
	public GamePlayChoisePage()
	{
		InitializeComponent();
	}

    private async void OnContinueClicked(object sender, EventArgs e)
    {
		await Shell.Current.GoToAsync(nameof(LevelChoisePage));
    }
}