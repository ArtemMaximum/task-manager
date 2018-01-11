import React from 'react'
import styled from 'styled-components'


export const Json = styled.pre`
  font-weight: 100;
  font-style: normal;
  color: #cc0000;
  background: #ced8d4;
  overflow: auto;
  border-radius: 10px;
  padding: 20px;
  max-height: 700px;
`

export const PrettyJson = ({ data }) => (
  <Json>
    {JSON.stringify(data, null, 2)}
  </Json>
)