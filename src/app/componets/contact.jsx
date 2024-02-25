
"use client"
import React from 'react'
import { useEffect } from 'react';
import { useHubspotForm } from 'next-hubspot';

function useHubspotContactForm() {
    const { loaded, error, formCreated } = useHubspotForm({
      portalId: '27163610',
      formId: 'c5743c42-c2cf-40be-8a01-abc25dfd281c',
      target: '#hubspot-form-wrapper'
    });
  
    return { loaded, error, formCreated };
  }
  
  export default function ContactMe() {
    const { loaded, error, formCreated } = useHubspotContactForm();
  
    return (
      <div>
        <h2>READY? LET'S GO</h2>
        <p>We specialise in driving revenue using paid and organic social marketing tactics.
          If you are a brand looking to scale, get in touch to discuss your goals.</p>
        <div id="hubspot-form-wrapper" />
      </div>
    );
  }