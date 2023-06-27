namespace MathLems.Pages;

public partial class BeginNowPage : ContentPage
{
	public BeginNowPage()
	{
		InitializeComponent();
	}

    private async void Button_Clicked(object sender, EventArgs e)
    {
        if (welcome.Text != "Que comen�i la festa")
        {
            welcome.Text = "Que comen�i la festa";
            button.IsEnabled = false;
                await logo.RotateTo(360, 1000);
            button.IsEnabled = true;
        }
        else
            await Shell.Current.GoToAsync(nameof(AvatarChoisePage));
    }
}