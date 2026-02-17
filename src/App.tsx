import { AllScreenshots } from './components/AllScreenshots'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Fitness App Features</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Interactive visual guide to our group fitness competition platform
          </p>
          <div className="mt-8 bg-blue-500/30 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-blue-50">
              💡 Click on any colored dot to explore detailed feature explanations!
            </p>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-gray-600">Click the colored dots to reveal explanations</p>
        </div>

        <AllScreenshots />
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">© 2026 Fitness App Platform</p>
        </div>
      </div>
    </div>
  )
}
