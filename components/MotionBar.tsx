import React from 'react'

type Props = {}

const words = [
  '1.Strategy & Research',
  '2.Art Direction',
  '3.Content Strategy',
  '4.Prototypes',
  '5.Graphic Editing',
  '6.Cyber Security'
];
const words2 = [
  '7.Responsive Web Design',
  '8.User Experience',
  '9.Web Development',
  '10.ECommerce',
  '11.Mobile Apps',
  '12.Data Solutions'
];

export default function MotionBar({ }: Props) {

  return (
    <>
      <div className="motion-bars-container py-12">
        <div className="text-6xl pb-6 font-light flex">
          <ul className="motion-bar1a text-6xl pb-6 font-light list-decimal">
            {words.map((word, index) => (
              <li key={index} className="inline-block whitespace-nowrap pr-6">
                <p className=" flex flex-row ">
                  {word}
                </p>
              </li>
            ))}
          </ul>
          <ul className="motion-bar1b text-6xl pb-6 font-light list-decimal">
            {words.map((word, index) => (
              <li key={index} className="inline-block whitespace-nowrap pr-6">
                <p className="inline-block whitespace-nowrap ">
                  {word}
                </p>
              </li>
            ))}
          </ul>
        </div>


        <div className="text-6xl pb-6 font-light flex">
          <ul className="motion-bar2a text-6xl pb-6 font-light list-decimal">
            {words2.map((word, index) => (
              <li key={index} className="inline-block whitespace-nowrap pr-6">
                <p className="inline-block whitespace-nowrap">
                  {word}
                </p>
              </li>
            ))}
          </ul>
          <ul className="motion-bar2b text-6xl  font-light list-decimal">
            {words2.map((word, index) => (
              <li key={index} className="inline-block whitespace-nowrap pr-6">
                <p className="inline-block whitespace-nowrap">
                  {word}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
