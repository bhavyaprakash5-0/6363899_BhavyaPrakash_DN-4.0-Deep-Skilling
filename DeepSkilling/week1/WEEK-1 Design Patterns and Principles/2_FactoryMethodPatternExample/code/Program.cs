using System;

namespace FactoryMethodPatternExample
{
    public interface IDocument
    {
        void Open(string filename);
        void Save(string filename);
    }

    public class WordDocument : IDocument
    {
        public void Open(string filename)
        {
            Console.WriteLine($"Opening Word document: {filename}.docx");
        }

        public void Save(string filename)
        {
            Console.WriteLine($"Saving docs {filename}.docx");
        }
    }

    public class PdfDocument : IDocument
    {
        public void Open(string filename)
        {
            Console.WriteLine($"Opening PDF document: {filename}.pdf");
        }

        public void Save(string filename)
        {
            Console.WriteLine($"Saving PDF {filename}.pdf");
        }
    }

    public class ExcelDocument : IDocument
    {
        public void Open(string filename)
        {
            Console.WriteLine($"Launching Excel sheet: {filename}.xlsx");
        }

        public void Save(string filename)
        {
            Console.WriteLine($"Saving spreadsheet {filename}.xlsx");
        }
    }

    public abstract class DocumentFactory
    {
        public abstract IDocument CreateDocument();
    }

    public class WordDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new WordDocument();
        }
    }

    public class PdfDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new PdfDocument();
        }
    }

    public class ExcelDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new ExcelDocument();
        }
    }

    class Program
    {
        static void Main()
        {
            string filename = "ProjectFile"; // <- Changed here

            DocumentFactory wordFactory = new WordDocumentFactory();
            IDocument word = wordFactory.CreateDocument();
            word.Open(filename);
            word.Save(filename);

            DocumentFactory pdfFactory = new PdfDocumentFactory();
            IDocument pdf = pdfFactory.CreateDocument();
            pdf.Open(filename);
            pdf.Save(filename);

            DocumentFactory excelFactory = new ExcelDocumentFactory();
            IDocument excel = excelFactory.CreateDocument();
            excel.Open(filename);
            excel.Save(filename);
        }
    }
}
