using MathLems.DataService;
using MathLems.Framework.Models;

namespace MathLems.Pages;

public partial class ProblemCRUDPage : ContentPage
{
    private readonly IRestDataService _dataService;
    Problem _problem;
    bool _isNew;

    public Problem Problem
    {
        get => _problem;
        set
        {
            _isNew = IsNew(value);
            _problem = value;
            OnPropertyChanged();
        }
    }
    private bool IsNew(Problem value)
    {
        if (value.Id == Guid.Empty)
        {
            return true;
        }
        return false;
    }

    public ProblemCRUDPage(IRestDataService dataService)
    {
        InitializeComponent();

        _dataService = dataService;

        var langList = dataService.GetAllLanguageAsync();
        Picker picker = new Picker { Title = "Select a monkey" };
        picker.ItemsSource = langList.Result;

        BindingContext = this; //IMPORTANT! 
    }

    private async void OnCheckClicked(object sender, EventArgs e)
    {
        await Shell.Current.DisplayAlert("Resposta", "Molt bè! l'has encertat", "Acceptar");
        await Shell.Current.DisplayAlert("Resposta", "Continua així!", "Acceptar");
    }
}