using MathLemsAPI.Data;
using MathLemsAPI.Endpoints;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//Add Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Register DB
var dbContext = builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseSqlite(builder.Configuration.GetConnectionString("SqliteConnection")));


var app = builder.Build();

//Add Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//TODO: If we want to use https we need to configure it
//app.UseHttpsRedirection();

app.MapAnswerEnpoints();
app.MapGameplayEnpoints();
app.MapLanguageEnpoints();
app.MapLevelEnpoints();
app.MapProblemEnpoints();
app.MapQuestionEnpoints();

app.Run();
