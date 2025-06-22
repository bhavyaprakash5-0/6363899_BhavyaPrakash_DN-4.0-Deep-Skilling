using System;

namespace SingletonPatternExample
{
    public class Logger
    {
        private static Logger instance = null;
        private static readonly object lockObj = new object();

        private Logger()
        {
            Console.WriteLine("Logger Initialized");
        }

        public static Logger GetInstance()
        {
            if (instance == null)
            {
                lock (lockObj)
                {
                    if (instance == null)
                    {
                        instance = new Logger();
                    }
                }
            }
            return instance;
        }

        public void Log(string message)
        {
            Console.WriteLine($"[LOG]: {message}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Logger logger1 = Logger.GetInstance();
            logger1.Log("Logging from logger1");

            Logger logger2 = Logger.GetInstance();
            logger2.Log("Logging from logger2");

            if (object.ReferenceEquals(logger1, logger2))
            {
                Console.WriteLine("Both logger1 and logger2 reference the same instance.");
            }
            else
            {
                Console.WriteLine("Different instances exist! Singleton failed.");
            }
        }
    }
}
