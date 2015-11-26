using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Nandoso.Models;

namespace Nandoso.Controllers
{
    public class SpecialsController : ApiController
    {
        private NandosoContext db = new NandosoContext();

        // GET: api/Special
        public IQueryable<Special> GetSpecial()
        {
            return db.Specials;
        }

        // GET: api/Special/5
        [ResponseType(typeof(Special))]
        public IHttpActionResult GetSpecial(int id)
        {
            Special specials = db.Specials.Find(id);
            if (specials == null)
            {
                return NotFound();
            }

            return Ok(specials);
        }

        // PUT: api/Special/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSpecial(int id, Special specials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != specials.ID)
            {
                return BadRequest();
            }

            db.Entry(specials).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpecialExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Special
        [ResponseType(typeof(Special))]
        public IHttpActionResult PostSpecial(Special specials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Specials.Add(specials);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = specials.ID }, specials);
        }

        // DELETE: api/Special/5
        [ResponseType(typeof(Special))]
        public IHttpActionResult DeleteSpecial(int id)
        {
            Special specials = db.Specials.Find(id);
            if (specials == null)
            {
                return NotFound();
            }

            db.Specials.Remove(specials);
            db.SaveChanges();

            return Ok(specials);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SpecialExists(int id)
        {
            return db.Specials.Count(e => e.ID == id) > 0;
        }
    }
}