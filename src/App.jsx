import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="bg-black text-white">
      {/* Top Header */}
      <div className="topbar py-2 d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center small">
          <div className="d-flex gap-4 align-items-center">
            <span><i className="bi bi-telephone-outbound me-2"></i> +1 (800) 555-0123</span>
            <span className="d-none d-md-inline"><i className="bi bi-envelope-open me-2"></i> sales@kitchencorp.com</span>
          </div>
          <div className="d-flex gap-3">
            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">KE<span>MM</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#why">Why Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
              <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
              <li className="nav-item"><a className="btn btn-cta ms-lg-3" href="#contact">Get Quote</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero with Spline cover */}
      <header id="home" className="hero position-relative">
        <div className="spline-wrap" style={{ width: '100%', height: '100%' }}>
          <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="overlay-gradient"></div>
        <div className="hero-content container">
          <h1 className="hero-title">Precision Kitchen Equipment Manufacturing</h1>
          <p className="hero-subtitle">Industrial-grade machines engineered for performance, safety, and reliability. From commercial ovens to custom stainless fabrication, we build to last.</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="#contact" className="btn btn-cta">Request a Quote</a>
            <a href="#about" className="btn btn-outline-darkx">Explore Products</a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6 reveal">
              <div className="about-img">
                <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1600&auto=format&fit=crop" alt="Industrial kitchen equipment" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 reveal">
              <h2 className="section-title">Built for Chefs. Engineered for Industry.</h2>
              <p className="section-subtitle">With decades of manufacturing excellence, we deliver high-performance kitchen machinery trusted by hotels, QSRs, and cloud kitchens worldwide.</p>
              <hr className="hr-accent" />
              <div className="row g-3 mt-3">
                <div className="col-sm-6">
                  <span className="icon-bullet"><i className="bi bi-tools"></i> Custom Fabrication</span>
                </div>
                <div className="col-sm-6">
                  <span className="icon-bullet"><i className="bi bi-shield-check"></i> Food-Grade Materials</span>
                </div>
                <div className="col-sm-6">
                  <span className="icon-bullet"><i className="bi bi-gear"></i> Heavy-Duty Reliability</span>
                </div>
                <div className="col-sm-6">
                  <span className="icon-bullet"><i className="bi bi-lightning-charge"></i> Energy Efficient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="section-title">Products & Capabilities</h2>
            <p className="section-subtitle">From prep to plating—machines that streamline every station.</p>
          </div>
          <div className="row g-4">
            {[
              {icon:'bi-fire', title:'Commercial Ovens', desc:'Convection, deck, and combi ovens with precise thermal control.'},
              {icon:'bi-droplet-half', title:'Fryers & Griddles', desc:'High-output units with safety-first designs and filtration.'},
              {icon:'bi-recycle', title:'Dishwashing Systems', desc:'Efficient, hygienic, and compliant with global standards.'},
              {icon:'bi-box-seam', title:'Stainless Fabrication', desc:'Custom benches, hoods, and modular storage systems.'},
              {icon:'bi-speedometer2', title:'Mixers & Processors', desc:'Industrial mixers, grinders, and cutters for mass production.'},
              {icon:'bi-wrench-adjustable', title:'Installation & Service', desc:'Certified commissioning and preventive maintenance.'}
            ].map((f, idx)=> (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="feature-card h-100 reveal">
                  <div className="feature-icon mb-3"><i className={`bi ${f.icon}`}></i></div>
                  <h5 className="fw-bold">{f.title}</h5>
                  <p className="text-muted">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="section">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">Six reasons partners trust our manufacturing.</p>
          </div>
          <div className="row g-4">
            {[
              {icon:'bi-award', title:'ISO-Certified Quality', desc:'Rigorous QA, material traceability, and compliance.'},
              {icon:'bi-cpu', title:'Advanced Engineering', desc:'CAD/CAM design, CNC precision, and stress testing.'},
              {icon:'bi-truck', title:'On-Time Delivery', desc:'Lean production and reliable logistics network.'},
              {icon:'bi-cash-coin', title:'Total Cost Advantage', desc:'Optimized BOMs without compromising durability.'},
              {icon:'bi-headset', title:'Lifetime Support', desc:'Expert technicians and easy access to spares.'},
              {icon:'bi-globe2', title:'Global Footprint', desc:'Installations across 30+ countries.'}
            ].map((r, idx)=> (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="reason h-100">
                  <div className="d-flex align-items-start gap-3">
                    <div className="fs-3"><i className={`bi ${r.icon}`}></i></div>
                    <div>
                      <h5 className="fw-bold mb-1">{r.title}</h5>
                      <p className="text-muted mb-0">{r.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about our machines and services.</p>
          </div>
          <div className="accordion" id="faqAccordion">
            {[
              {q:'Do you provide custom machine designs?', a:'Yes, our engineering team collaborates with your chefs and ops team to design equipment tailored to your workflow and space.'},
              {q:'What is the typical lead time?', a:'Standard products ship in 2–4 weeks. Custom fabrication varies by scope, typically 6–10 weeks.'},
              {q:'Do you offer installation and training?', a:'We provide end‑to‑end installation, commissioning, and onsite staff training.'},
              {q:'How do you ensure food safety compliance?', a:'We manufacture using food‑grade stainless steel and certify to relevant international standards.'},
              {q:'What about after‑sales service?', a:'We offer preventive maintenance plans and 24/7 support with rapid spare parts fulfillment.'},
              {q:'Can you export internationally?', a:'Yes, we handle export documentation and worldwide shipping.'}
            ].map((item, idx)=> (
              <div className="accordion-item" key={idx}>
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button className={`accordion-button ${idx!==0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded={idx===0} aria-controls={`collapse${idx}`}>
                    {item.q}
                  </button>
                </h2>
                <div id={`collapse${idx}`} className={`accordion-collapse collapse ${idx===0 ? 'show' : ''}`} aria-labelledby={`heading${idx}`} data-bs-parent="#faqAccordion">
                  <div className="accordion-body">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="section">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h2 className="section-title">From Our Blog</h2>
            <p className="section-subtitle">Insights on equipment, hygiene, and kitchen workflow optimization.</p>
          </div>
          <div className="row g-4">
            {[
              {img:'https://images.unsplash.com/photo-1556909114-05b7e6e2228f?q=80&w=1600&auto=format&fit=crop', title:'Designing for Heat & Hygiene', desc:'How to select materials and finishes that stand up to high‑temp service while staying spotless.'},
              {img:'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?q=80&w=1600&auto=format&fit=crop', title:'Line Efficiency 101', desc:'Reduce bottlenecks and increase throughput with the right machine layout.'},
              {img:'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop', title:'Maintenance that Pays', desc:'A preventive maintenance checklist for busy commercial kitchens.'}
            ].map((b, idx)=> (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="blog-card h-100 reveal">
                  <img src={b.img} alt={b.title} />
                  <div className="p-3">
                    <h5 className="fw-bold">{b.title}</h5>
                    <p className="text-muted">{b.desc}</p>
                    <a className="btn btn-sm btn-outline-darkx" href="#">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer pt-5">
        <div className="container">
          <div className="row g-4 pb-4">
            <div className="col-md-6 col-lg-3">
              <h5 className="fw-bold text-white">KE<span className="text-red">MM</span></h5>
              <p className="mt-2">Manufacturing premium kitchen equipment for restaurants, hotels, and enterprises.</p>
              <div className="d-flex gap-3 mt-3">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="fw-bold text-white">Company</h6>
              <ul className="list-unstyled">
                <li><a href="#about">About</a></li>
                <li><a href="#features">Products</a></li>
                <li><a href="#why">Why Us</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="fw-bold text-white">Products</h6>
              <ul className="list-unstyled">
                <li><a href="#">Ovens</a></li>
                <li><a href="#">Griddles</a></li>
                <li><a href="#">Dishwashers</a></li>
                <li><a href="#">Worktables</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="fw-bold text-white">Contact</h6>
              <ul className="list-unstyled">
                <li><i className="bi bi-geo-alt me-2"></i> 120 Industrial Park, Suite 400</li>
                <li><i className="bi bi-telephone-outbound me-2"></i> +1 (800) 555-0123</li>
                <li><i className="bi bi-envelope-open me-2"></i> sales@kitchencorp.com</li>
              </ul>
              <form className="d-flex gap-2 mt-3">
                <input type="email" className="form-control newsletter-input" placeholder="Your email" />
                <button className="btn newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="border-top border-dark py-3 small text-center text-muted">© {new Date().getFullYear()} KEMM. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
