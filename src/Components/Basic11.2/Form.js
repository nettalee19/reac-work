import React, { Component } from 'react';


class CheckedForm extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            terms: [
                {id:1, value: "read", isChecked: false},
                {id:2, value: "accept", isChecked: false},
                {id:3, value: "letter", isChecked: false},
                {id:4, value: "offers", isChecked: false}
            ]
            
        }
    }
     
     render() {
         return (
            //  <div>
            //      {
            //          this.state.terms.map((p) =>{
            //              return<Check key={p} value={p.value} isChecked={p.isChecked}>
            //          })
            //      }
            //  </div>
         )
     }
}


export default CheckedForm;
