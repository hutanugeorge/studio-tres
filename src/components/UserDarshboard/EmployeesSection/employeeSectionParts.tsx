import React from 'react'


export const renderPersonalInformation = (setEditEmployee: (arg: (prev: boolean) => boolean) => void): JSX.Element =>
   <>
      <div className="employees__categories__employees-group__employee--info--person--photo--wrap">
         <div className="employees__categories__employees-group__employee--info--person--photo">
            <img src="/images/facial-treatments-promo.jpg" alt=""
                 className="employees__categories__employees-group__employee--info--person--photo--content"/>
         </div>
      </div>
      <div className="employees__categories__employees-group__employee--info--person--personal">
         <div className="employees__categories__employees-group__employee--info--person--personal-dates">
            <p className="employees__categories__employees-group__employee--info--person--personal-dates--content">
               First Name
            </p>
            <p className="employees__categories__employees-group__employee--info--person--personal-dates--content">
               Last Name
            </p>
            <p className="employees__categories__employees-group__employee--info--person--personal-dates--content">
               Field
            </p>
            <p className="employees__categories__employees-group__employee--info--person--personal-dates--content">
               Job Title
            </p>
            <p className="employees__categories__employees-group__employee--info--person--personal-dates--content">
               Email
            </p>
            <p className="employees__categories__employees-group__employee--info--person--personal-dates--content">
               Phone
            </p>
            <p
               className="employees__categories__employees-group__employee--info--person--personal-dates--settings-button"
               onClick={() => {
                  setEditEmployee((prev: boolean) => !prev)
               }}>
               Settings
            </p>
         </div>
         <div
            className="employees__categories__employees-group__employee--info--person--personal-statistics">
            <p className="employees__categories__employees-group__employee--info--person-statistics--content">
               Appointments this month: 6
            </p>
            <p className="employees__categories__employees-group__employee--info--person-statistics--content">
               Appointments this week: 4
            </p>
            <p className="employees__categories__employees-group__employee--info--person-statistics--content">
               Appointments today: 2
            </p>
         </div>
      </div>
   </>

export const renderEmployeeEditForm = (setEditEmployee: (arg: boolean) => void): JSX.Element =>
   <>
      <div className="employees__categories__employees-group__employee--edit--wrap">
         <div className="employees__categories__employees-group__employee--edit">
            <div className="employees__categories__employees-group__employee--edit--title">
               <p className="employees__categories__employees-group__employee--edit--title--content">
                  Edit Employee
               </p>
            </div>
            <div className="employees__categories__employees-group__employee--edit--form">
               <form action=""
                     className="employees__categories__employees-group__employee--edit--form--content">
                  <div
                     className="employees__categories__employees-group__employee--edit--form--content--group">
                     <input type="text" name="firstName" placeholder="First Name"
                            className="employees__categories__employees-group__employee--edit--form--content--input"/>
                     <label htmlFor="firstName"
                            className="employees__categories__employees-group__employee--edit--form--content--label">First
                        Name</label>
                  </div>
                  <div
                     className="employees__categories__employees-group__employee--edit--form--content--group">
                     <input type="text" name="lastName" placeholder="Last Name"
                            className="employees__categories__employees-group__employee--edit--form--content--input"/>
                     <label htmlFor="lastName"
                            className="employees__categories__employees-group__employee--edit--form--content--label">Last
                        Name</label>
                  </div>
                  <div
                     className="employees__categories__employees-group__employee--edit--form--content--group">
                     <input type="text" name="field" placeholder="Field"
                            className="employees__categories__employees-group__employee--edit--form--content--input"/>
                     <label htmlFor="field"
                            className="employees__categories__employees-group__employee--edit--form--content--label">Field</label>
                  </div>
                  <div
                     className="employees__categories__employees-group__employee--edit--form--content--group">
                     <input type="text" name="jobTitle" placeholder="Job Title"
                            className="employees__categories__employees-group__employee--edit--form--content--input"/>
                     <label htmlFor="jobTitle"
                            className="employees__categories__employees-group__employee--edit--form--content--label">Job
                        Title</label>
                  </div>
                  <div
                     className="employees__categories__employees-group__employee--edit--form--content--group">
                     <input type="email" name="email" placeholder="Email"
                            className="employees__categories__employees-group__employee--edit--form--content--input"/>
                     <label htmlFor="email"
                            className="employees__categories__employees-group__employee--edit--form--content--label">Email</label>
                  </div>
                  <div
                     className="employees__categories__employees-group__employee--edit--form--content--group">
                     <input type="tel" name="phone" placeholder="Phone"
                            className="employees__categories__employees-group__employee--edit--form--content--input"/>
                     <label htmlFor="phone"
                            className="employees__categories__employees-group__employee--edit--form--content--label">Phone</label>
                  </div>
                  <div
                     className="employees__categories__employees-group__employee--edit--form--content--buttons">
                     <button type="submit"
                             className="employees__categories__employees-group__employee--edit--form--content--buttons--save">Save
                     </button>
                     <p className="employees__categories__employees-group__employee--edit--form--content--buttons--cancel"
                        onClick={() => {
                           setEditEmployee(false)
                        }}>
                        Cancel
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </>

export const renderLastAppointments = (): JSX.Element => {
   return (
      <div className="employees__categories__employees-group__employee--info--last-appointments">
         <div
            className="employees__categories__employees-group__employee--info--last-appointments--title">
            <p className="employees__categories__employees-group__employee--info--last-appointments--title--content">
               Last Appointments
            </p>
         </div>
         <div
            className="employees__categories__employees-group__employee--info--last-appointments--content">
            <div
               className="employees__categories__employees-group__employee--info--last-appointments--content--appointment">
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Nume</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Prenume</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Ora</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Data</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Serviciu</p>
            </div>
            <div
               className="employees__categories__employees-group__employee--info--last-appointments--content--appointment">
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Nume</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Prenume</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Ora</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Data</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Serviciu</p>
            </div>
            <div
               className="employees__categories__employees-group__employee--info--last-appointments--content--appointment">
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Nume</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Prenume</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Ora</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Data</p>
               <p className="employees__categories__employees-group__employee--info--last-appointments--content--appointment--data">Serviciu</p>
            </div>

         </div>
      </div>
   )
}