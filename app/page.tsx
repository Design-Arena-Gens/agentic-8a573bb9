'use client'

import { useState } from 'react'

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">Falcon3Dmodel</div>
          <button className="btn-primary text-white px-6 py-2 rounded-full font-semibold">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Falcon3D: The world's most<br />advanced 3D modeling system
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your creative workflow, boost productivity and achieve professional results
            </p>
            <button className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold">
              Order Now
            </button>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop"
                alt="Professional 3D Modeling Setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Your complete 3D workflow
          </h2>

          <div className="space-y-20">
            {/* Morning */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="text-sm font-semibold text-purple-600 mb-2">MORNING BOOST</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Start with precision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Begin your day with enhanced clarity. Falcon3D's advanced rendering engine
                  provides instant feedback and helps you focus on complex modeling tasks
                  from the very first hour.
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop"
                    alt="Morning Workflow"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Midday */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1">
                <div className="text-sm font-semibold text-purple-600 mb-2">FULL FOCUS</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Uninterrupted creation</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Stay in your creative flow with intelligent automation. Falcon3D adapts
                  to your workflow, providing real-time optimization and seamless tool switching
                  so you never lose momentum.
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558403194-611308249627?w=600&h=600&fit=crop"
                    alt="Focused Work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Presentation */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="text-sm font-semibold text-purple-600 mb-2">PRESENTATION MODE</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Perfect for showcasing</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Present your 3D models with confidence. Built-in lighting presets and
                  camera controls ensure your work looks stunning in client meetings and
                  video conferences.
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop"
                    alt="Presentation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Evening */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1">
                <div className="text-sm font-semibold text-purple-600 mb-2">EVENING REFINEMENT</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Final touches</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Wind down with intuitive refinement tools. The warm ambient mode reduces
                  eye strain while you add those final details that make your models exceptional.
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop"
                    alt="Evening Work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Technical Excellence
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Processing Power</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>GPU-accelerated rendering: 10,000+ frames per second</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Real-time ray tracing with 8K resolution support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI-powered mesh optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cloud rendering integration</span>
                </li>
              </ul>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Dimensions & Build</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Workstation dimensions: 850mm × 655mm × 450mm</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Weight: 28kg (premium materials)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Aluminum chassis with carbon fiber accents</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Designed and engineered in Germany</span>
                </li>
              </ul>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Display Technology</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Triple 4K OLED displays (12K total resolution)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Color accuracy: 100% DCI-P3, 98% Adobe RGB</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Brightness: 2,200-6,500 nits adaptive</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>True HDR with local dimming</span>
                </li>
              </ul>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automatic workflow optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Voice-controlled navigation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gesture recognition sensors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mobile app integration (iOS & Android)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
            I recommend anyone who wants to push the boundaries of 3D design and
            maximize their creative efficiency to experience the Falcon3D system.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="text-left">
              <div className="font-bold text-lg">Alex Rivera</div>
              <div className="text-white/80">Creative Director & 3D Artist</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Experience Falcon3D
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            30-day risk-free trial • Free shipping • Made in Germany
          </p>
          <div className="text-5xl font-bold gradient-text mb-8">
            €2,990
          </div>
          <button className="btn-primary text-white px-12 py-4 rounded-full text-lg font-semibold">
            Order Now
          </button>
          <p className="text-gray-500 mt-6 text-sm">
            Professional installation available • Extended warranty options
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Specifications</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Licenses</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Falcon3Dmodel. All rights reserved. Made in Germany.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
