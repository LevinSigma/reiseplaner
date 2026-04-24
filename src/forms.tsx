import { useState } from 'react'
import { packLists } from './toDo.tsx'
import './App.css'

function Forms() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState({
    name: '',
    age: '',
    destination: '',
    vacationType: '',
    departureDate: '',
    returnDate: ''
  })
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    destination: '',
    vacationType: '',
    departureDate: '',
    returnDate: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCheckbox = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    setSubmittedData(formData)
    console.log('Eingegebene Daten:', formData)
    setIsSubmitted(true)
    
    setFormData({
      name: '',
      age: '',
      destination: '',
      vacationType: '',
      departureDate: '',
      returnDate: '',
    })
  }

  const getTravelTips = () => {
    const tips = {
      beach: [
        'Sonnenschutz regelmäßig erneuern',
        'Viel Wasser trinken',
        'Leichte und atmungsaktive Kleidung tragen',
        'Strandbag mit Wertsachen vermeiden'
      ],
      mountain: [
        'Gute Wanderschuhe einlaufen',
        'Wetter vor dem Wandern überprüfen',
        'Regelmäßige Pausen machen',
        'Höhenakklimatisierung beachten'
      ],
      city: [
        'Gutes Schuhwerk für langes Laufen',
        'Öffentliche Verkehrsmittel nutzen',
        'Sehenswürdigkeiten vorher recherchieren',
        'Kleine Wertsachen sicher verwahren'
      ]
    }
    return tips[submittedData.vacationType as keyof typeof tips] || []
  }

  const renderPackList = () => {
    if (!isSubmitted || !submittedData.vacationType) return null

    const selectedPackList = packLists[submittedData.vacationType as keyof typeof packLists]

    return (
      <div className="packlist-card-simple">
        <h2 className="packlist-title-simple">
          {selectedPackList.title}
        </h2>

        <ul className="packlist-list">
          {selectedPackList.items.map((item: string, index: number) => (
            <li key={index} className="packlist-item-simple">
              <input
                type="checkbox"
                id={`item-${index}`}
                checked={checkedItems[item] || false}
                onChange={() => handleCheckbox(item)}
                className="packlist-checkbox-input"
              />
              <label htmlFor={`item-${index}`} className="packlist-label">
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      <h1>Reise Informationen</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Alter"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <input type="text" name="destination" id="destination" placeholder='Reiseziel' 
          value={formData.destination}
          onChange={handleChange}
          required
        />

        <select
          name="vacationType"
          value={formData.vacationType}
          onChange={handleChange}
          required
        >
          <option value="" hidden>
            Art der Ferien
          </option>
          <option value="beach">Strandferien</option>
          <option value="mountain">Bergferien</option>
          <option value="city">Stadtferien</option>
        </select>

        <label htmlFor="departure-date">Abreisdatum:</label>
        <input
          type="date"
          id="departure-date"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
        />

        <label htmlFor="return-date">Rückreisedatum:</label>
        <input
          type="date"
          id="return-date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          required
        />

        <button type='submit'>Einreichen</button>
      </form>

      {isSubmitted ? (
        <>
          <div className="info-container">
            {renderPackList()}
            <div className="travel-info-card">
              <h2 className="travel-info-title">Reiseinformationen</h2>
              <ul className="travel-info-list">
                <li className="travel-info-item"><strong>Name:</strong> {submittedData.name}</li>
                <li className="travel-info-item"><strong>Alter:</strong> {submittedData.age}</li>
                <li className="travel-info-item"><strong>Reiseziel:</strong> {submittedData.destination}</li>
                <li className="travel-info-item"><strong>Art der Ferien:</strong> {submittedData.vacationType}</li>
                <li className="travel-info-item"><strong>Abreisdatum:</strong> {submittedData.departureDate}</li>
                <li className="travel-info-item"><strong>Rückreisedatum:</strong> {submittedData.returnDate}</li>
              </ul>

              <h3 className="travel-tips-subtitle">Tipps für diese Reise</h3>
              <ul className="travel-tips-list-inline">
                {getTravelTips().map((tip, index) => (
                  <li key={index} className="travel-tips-item-inline">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Forms
