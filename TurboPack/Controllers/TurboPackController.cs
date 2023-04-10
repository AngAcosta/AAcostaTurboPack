using Microsoft.AspNetCore.Mvc;

namespace TurboPack.Controllers
{
    public class TurboPackController : Controller
    {
        public ActionResult GetAll()
        {
            return View();
        }
    }
}