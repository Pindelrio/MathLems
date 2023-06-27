using MathLems.Pages;

namespace MathLems;

public partial class AppShell : Shell
{
	public AppShell()
	{
		InitializeComponent();

        Routing.RegisterRoute(nameof(ProblemPage), typeof(ProblemPage));
        Routing.RegisterRoute(nameof(ProblemCRUDPage), typeof(ProblemCRUDPage));
        Routing.RegisterRoute(nameof(WorldPage), typeof(WorldPage));
        Routing.RegisterRoute(nameof(LoginPage), typeof(LoginPage));
        Routing.RegisterRoute(nameof(BeginNowPage), typeof(BeginNowPage));
        Routing.RegisterRoute(nameof(AvatarChoisePage), typeof(AvatarChoisePage));
        Routing.RegisterRoute(nameof(GamePlayChoisePage), typeof(GamePlayChoisePage));
        Routing.RegisterRoute(nameof(LevelChoisePage), typeof(LevelChoisePage));
        Routing.RegisterRoute(nameof(SettingsPage), typeof(SettingsPage));
        Routing.RegisterRoute(nameof(AboutPage), typeof(AboutPage));
    }
}
