using MathLems.Framework.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace MathLems.DataService
{
    public class RestDataService : IRestDataService
    {
        private readonly HttpClient _httpClient;
        private readonly string _baseAddress;
        private readonly string _url;
        private readonly JsonSerializerOptions _jsonSerializeOptions;


        public RestDataService(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _baseAddress = DeviceInfo.Platform == DevicePlatform.Android ? "http://10.0.2.2:5285" : "https://localhost:7156";
            _url = $"{_baseAddress}/api";

            _jsonSerializeOptions = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
        }
        public Task<List<Gameplay>> GetAllGameplayAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<List<Language>> GetAllLanguageAsync()
        {
            List<Language> languages = new List<Language>();
            if (Connectivity.Current.NetworkAccess != NetworkAccess.Internet)
            {
                Debug.WriteLine("---> No internet access...");
                return languages;
            }

            try
            {
                HttpResponseMessage response = await _httpClient.GetAsync($"{_url}/language");
                if (response.IsSuccessStatusCode)
                {
                    string content = await response.Content.ReadAsStringAsync();
                    languages = JsonSerializer.Deserialize<List<Language>>(content, _jsonSerializeOptions);
                }
                else
                {
                    Debug.WriteLine("---> No http 2xx response...");
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Whoops exception: {ex.Message}");
            }
            return languages;
        }

        public Task<List<Level>> GetAllLevelAsync()
        {
            throw new NotImplementedException();
        }

        public Task<List<Problem>> GetAllProblemAsync()
        {
            throw new NotImplementedException();
        }

        public Task<List<Question>> GetAllQuestionAsync()
        {
            throw new NotImplementedException();
        }
    }
}
