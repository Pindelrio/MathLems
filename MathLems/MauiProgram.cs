namespace MathLems;

public static class MauiProgram
{
	public static MauiApp CreateMauiApp()
	{
		var builder = MauiApp.CreateBuilder();
		builder
			.UseMauiApp<App>()
			.ConfigureFonts(fonts =>
			{
				fonts.AddFont("Quicksand-Bold.ttf", "QuicksandBold");
				fonts.AddFont("Quicksand-Light.ttf", "QuicksandLight");
				fonts.AddFont("Quicksand-Medium.ttf", "QuicksandMedium");
                fonts.AddFont("Quicksand-Regular.ttf", "QuicksandRegular");
				fonts.AddFont("Quicksand-Semibold.ttf", "QuicksandSemiBold");
			});

		return builder.Build();
	}

}
