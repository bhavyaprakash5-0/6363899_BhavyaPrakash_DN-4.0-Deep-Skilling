using System;
using System.Collections.Generic;

namespace FinancialForecasting
{
    class Program
    {
     
        static double RecursiveForecast(double amount, double rate, int year)
        {
            if (year == 0)
                return amount;

            double prev = RecursiveForecast(amount, rate, year - 1);
            double current = prev * (1 + rate);
            Console.WriteLine($"Year: {year}, Value: {current:F2}");
            return current;
        }

        
        static double ForecastWithGrowthRates(double amount, List<double> growthRates, int index = 0)
        {
            if (index >= growthRates.Count)
                return amount;

            double newAmount = amount * (1 + growthRates[index]);
            Console.WriteLine($"Year {index + 1}: Growth {growthRates[index] * 100}% -> ₹{newAmount:F2}");
            return ForecastWithGrowthRates(newAmount, growthRates, index + 1);
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Recursive Financial Forecast");
            Console.WriteLine("Initialized Forecasting Engine\n");

            Console.WriteLine("What is Recursion?");
            Console.WriteLine("Recursion is a programming technique where a method solves a problem");
            Console.WriteLine("by calling itself on a smaller part of the problem.");
            Console.WriteLine("It continues this process until it reaches a base case — a simple,");
            Console.WriteLine("non-recursive scenario that can be solved directly.\n");
            Console.WriteLine("Key characteristics:");
            Console.WriteLine("- A base case to stop the recursion");
            Console.WriteLine("- A recursive call that reduces the problem");
            Console.WriteLine("- Progress toward the base case in each step\n");

          
            Console.WriteLine("Basic Recursive Forecast");
            double initialAmount = 12000;
            double growthRate = 0.06;
            int years = 6;
            double finalValue = RecursiveForecast(initialAmount, growthRate, years);
            Console.WriteLine($"Year: 0, Value: {initialAmount:F2}");
            Console.WriteLine($"Future Value: ₹{finalValue:F2}\n");

            
            Console.WriteLine("Growth Rate-Based Forecast");
            double startAmount = 10000;
            List<double> variableGrowthRates = new List<double> { 0.09, 0.05, 0.08, 0.00000000000000001, 0.04 };
            double result = ForecastWithGrowthRates(startAmount, variableGrowthRates);
            Console.WriteLine($"Forecast complete. Final amount: ₹{result:F2}");
            Console.WriteLine($"Predicted Total: ₹{result:F2}\n");

           
            Console.WriteLine("Time & Space Analysis");
            Console.WriteLine("Recursive model has:");
            Console.WriteLine("- Time: O(n) where n = number of periods");
            Console.WriteLine("- Space: O(n) due to call stack");
            Console.WriteLine("Risks:");
            Console.WriteLine("- Stack overflow if recursion too deep");
            Console.WriteLine("- Repeating calculations without optimization\n");

           
            Console.WriteLine("Optimizing Recursion:");
            Console.WriteLine("1. Use memoization");
            Console.WriteLine("2. Use tail recursion if possible");
            Console.WriteLine("3. Convert to iteration");
            Console.WriteLine("4. Apply formulas for predictable calculations");
        }
    }
}
