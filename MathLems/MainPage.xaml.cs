using MathLems.Framework.Models;
using MathLems.Pages;

namespace MathLems;

public partial class MainPage : ContentPage
{
	public MainPage()
	{
		InitializeComponent();
	}


    private async void OnBeginNow(object sender, EventArgs e)
    {
        await Shell.Current.GoToAsync(nameof(BeginNowPage));
    }
    private async void OnAlreadyRegistred(object sender, EventArgs e)
    {
        await Shell.Current.GoToAsync(nameof(LoginPage));
    }
    private async void OnProblemClicked(object sender, EventArgs e)
    {
        var navigationParameter = new Dictionary<string, object>
        {
            { nameof(Problem), new Problem() }
        };
        await Shell.Current.GoToAsync(nameof(ProblemCRUDPage), navigationParameter);
    }
}

