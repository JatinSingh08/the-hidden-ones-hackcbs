import React from 'react'
import {doc_data} from "../../../Data/Testimonials/Data_doctor"
//Styles
import "./DoctorsCard.css"

export default function DoctorsCard() {
    return (
        <div className='GridContainer'>
    {doc_data.map((doc) => {
        return (
            <div>
        <div className="GridBoxes">
            <div className="GridImage">
                <img className="" src={doc.img_url} alt="BonnieImage"/>
                <p className="DoctorName text_det det">{doc.name}</p>
                <span className="DoctorSpeciality text_det">{doc.speciality}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="#_" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Consult</a>
                    {/* <a href="#_" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> */}
                </div>
            </div>
        </div>
    </div>
        )
    })}
    </div>
    )
};
