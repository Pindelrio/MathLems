namespace MathLems.Pages;

public partial class AvatarChoisePage : ContentPage
{
	public AvatarChoisePage()
	{
		InitializeComponent();
	}

	private async void OnContinueClicked(object sender, EventArgs e)
	{
        await Shell.Current.GoToAsync(nameof(WorldPage));
    }
}