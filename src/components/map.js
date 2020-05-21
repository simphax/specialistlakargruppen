import React from "react"
import styled from "styled-components"

const MapContainer = styled.div`
  border-top: 4px solid var(--color-dark-grey);
  overflow: hidden;
  padding-bottom: 300px;
  position: relative;
  height: 0;

  & iframe {
    left: 0;
    top: 0;
    height: 300px;
    width: 100%;
    position: absolute;
  }
`

const Map = () => {
  return (
    <MapContainer>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4007.218091497386!2d17.642458333958576!3d59.85563268184614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fcbfbc279252d%3A0xeede0e8f2fd7cc3b!2sSpecialistl%C3%A4kargruppen%20Uppsala%20Ab!5e0!3m2!1ssv!2sse!4v1585428381298!5m2!1ssv!2sse"
        width="600"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </MapContainer>
  )
}

export default Map
