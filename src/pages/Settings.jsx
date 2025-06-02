import { useState } from 'react'
import { FiSave } from 'react-icons/fi'
import PageHeader from '@components/PageHeader'

const Settings = () => {
  const [storeSettings, setStoreSettings] = useState({
    storeName: 'HealthMart',
    storeDescription: 'Your one-stop health and wellness shop',
    contactEmail: 'contact@healthmart.com',
    contactPhone: '+1 555-123-4567',
    currency: 'USD',
    language: 'en-US',
    timezone: 'America/New_York',
    enableNotifications: true,
    darkMode: false
  })
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setStoreSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally save the settings to backend
    console.log('Settings saved:', storeSettings)
    alert('Settings saved successfully!')
  }
  
  return (
    <>
      <PageHeader
        title="Settings"
        subtitle="Manage your store preferences"
      />
      
      <div className="card max-w-4xl">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Store Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 mb-1">
                    Store Name
                  </label>
                  <input
                    id="storeName"
                    name="storeName"
                    type="text"
                    value={storeSettings.storeName}
                    onChange={handleChange}
                    className="input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="storeDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Store Description
                  </label>
                  <input
                    id="storeDescription"
                    name="storeDescription"
                    type="text"
                    value={storeSettings.storeDescription}
                    onChange={handleChange}
                    className="input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Email
                  </label>
                  <input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    value={storeSettings.contactEmail}
                    onChange={handleChange}
                    className="input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Phone
                  </label>
                  <input
                    id="contactPhone"
                    name="contactPhone"
                    type="tel"
                    value={storeSettings.contactPhone}
                    onChange={handleChange}
                    className="input w-full"
                  />
                </div>
              </div>
            </div>
            
            <hr className="border-gray-200" />
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Regional Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    value={storeSettings.currency}
                    onChange={handleChange}
                    className="input w-full"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="JPY">JPY (¥)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={storeSettings.language}
                    onChange={handleChange}
                    className="input w-full"
                  >
                    <option value="en-US">English (US)</option>
                    <option value="en-GB">English (UK)</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                    Timezone
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    value={storeSettings.timezone}
                    onChange={handleChange}
                    className="input w-full"
                  >
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    <option value="Europe/London">London (GMT)</option>
                    <option value="Europe/Paris">Paris (CET)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <hr className="border-gray-200" />
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="enableNotifications"
                    name="enableNotifications"
                    type="checkbox"
                    checked={storeSettings.enableNotifications}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="enableNotifications" className="ml-2 block text-sm text-gray-700">
                    Enable email notifications
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="darkMode"
                    name="darkMode"
                    type="checkbox"
                    checked={storeSettings.darkMode}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="darkMode" className="ml-2 block text-sm text-gray-700">
                    Enable dark mode
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6 flex justify-end">
            <button type="button" className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 mr-3">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary flex items-center gap-2">
              <FiSave className="h-4 w-4" />
              <span>Save Settings</span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Settings