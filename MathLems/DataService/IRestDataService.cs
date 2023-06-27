using MathLems.Framework.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathLems.DataService
{
    public interface IRestDataService
    {
        Task<List<Language>> GetAllLanguageAsync();
        Task<List<Problem>> GetAllProblemAsync();
        Task<List<Question>> GetAllQuestionAsync();
        Task<List<Level>> GetAllLevelAsync();
        Task<List<Gameplay>> GetAllGameplayAsync();
        //Task AddToDoAsync(ToDo toDo);
        //Task UpdateToDoAsync(ToDo toDo);
        //Task DeleteToDoAsync(int id);
    }
}
