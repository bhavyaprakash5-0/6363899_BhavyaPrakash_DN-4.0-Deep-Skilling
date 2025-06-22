using System;
using System.Collections.Generic;
using System.Linq;

namespace ECommerceSearch
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }

        public Product(int productId, string productName, string category)
        {
            ProductId = productId;
            ProductName = productName.ToLower();
            Category = category.ToLower();
        }

        public override string ToString()
        {
            return $"{ProductId} - {ProductName} ({Category})";
        }
    }

    class Program
    {
        static List<Product> products = new List<Product>();
        static Dictionary<string, List<Product>> nameDict = new Dictionary<string, List<Product>>();
        static Dictionary<string, List<Product>> categoryDict = new Dictionary<string, List<Product>>();

        static void Main()
        {
          
            SeedProducts();
            BuildDictionaries();

            int searchId = 104;
            string searchName = "book";
            string searchCategory = "education";

            Console.WriteLine("📌 Product List:");
            ShowAllProducts();


            Console.WriteLine("\n🔍 Linear Search by ID:");

            var linear = LinearSearch(searchId);
            Console.WriteLine(linear != null ? $"✅ Found: {linear}" : "❌ Not found");

            Console.WriteLine("\n🔍 Binary Search by ID:");

            var binary = BinarySearch(searchId);
            Console.WriteLine(binary != null ? $"✅ Found: {binary}" : "❌ Not found");

            Console.WriteLine($"\n🔍 Dictionary Search by Name: \"{searchName}\"");

            var nameResults = SearchByName(searchName);
            if (nameResults.Count > 0)
                nameResults.ForEach(p => Console.WriteLine($"✅ {p}"));
            else
                Console.WriteLine("❌ No results");

            Console.WriteLine($"\n🔍 Dictionary Search by Category: \"{searchCategory}\"");
            var categoryResults = SearchByCategory(searchCategory);
            if (categoryResults.Count > 0)
                categoryResults.ForEach(p => Console.WriteLine($"✅ {p}"));
            else
                Console.WriteLine("❌ No results");
        }

        static void SeedProducts()
        {
            products = new List<Product>
            {
                new Product(105, "Shoes", "Footwear"),
                new Product(101, "Laptop", "Electronics"),
                new Product(104, "Book", "Education"),
                new Product(102, "Shirt", "Clothing"),
                new Product(103, "Mobile", "Electronics"),
                new Product(106, "Pen", "Education"),
                new Product(107, "Trousers", "Clothing"),
            };
        }

        static void BuildDictionaries()
        {
            nameDict.Clear();
            categoryDict.Clear();

            foreach (var product in products)
            {
                if (!nameDict.ContainsKey(product.ProductName))
                    nameDict[product.ProductName] = new List<Product>();
                nameDict[product.ProductName].Add(product);

                if (!categoryDict.ContainsKey(product.Category))
                    categoryDict[product.Category] = new List<Product>();
                categoryDict[product.Category].Add(product);
            }
        }

        static Product LinearSearch(int id)
        {
            return products.FirstOrDefault(p => p.ProductId == id);
        }

        static Product BinarySearch(int id)
        {
            var sorted = products.OrderBy(p => p.ProductId).ToList();
            int left = 0, right = sorted.Count - 1;

            while (left <= right)
            {
                int mid = (left + right) / 2;
                if (sorted[mid].ProductId == id)
                    return sorted[mid];
                else if (sorted[mid].ProductId < id)
                    left = mid + 1;
                else
                    right = mid - 1;
            }
            return null;
        }

        static List<Product> SearchByName(string name)
        {

            name = name.ToLower();
            return nameDict.ContainsKey(name) ? nameDict[name] : new List<Product>();
        }

        static List<Product> SearchByCategory(string category)
        {

            category = category.ToLower();
            return categoryDict.ContainsKey(category) ? categoryDict[category] : new List<Product>();
        }

        static void ShowAllProducts()
        {
            foreach (var product in products.OrderBy(p => p.ProductId))
                Console.WriteLine(product);
        }
    }
}
