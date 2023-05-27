import React, { useMemo } from 'react'
import Select from 'react-select'
import Scrollbars from 'react-custom-scrollbars'
import countryList from 'react-select-country-list'
import { ReactComponent as ArrowUp } from '../../assets/arrow_up.svg'
import { ReactComponent as ArrowDown } from '../../assets/arrow_down.svg'
import Check from '../../assets/check.svg'

const CountrySelector = ({ value, handleSelect, title }) => {
  const options = useMemo(() => countryList().getData(), [])

  const renderScrollbar = (props) => (
    <div style={{ height: 250 }}>
      <Scrollbars
        renderThumbHorizontal={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              width: '4px',
              height: '60px',
              borderRadius: '2px',
              backgroundColor: '#DBD7EE',
            }}
          />
        )}
      >
        {props.children}
      </Scrollbars>
    </div>
  )

  return (
    <div>
      <div className="mb-2 text-sm text-white">{title}</div>
      <Select
        options={options}
        value={value}
        onChange={(val) => handleSelect(val)}
        placeholder="Select country"
        components={{
          MenuList: renderScrollbar,
          IndicatorSeparator: () => null,
          DropdownIndicator: (props) => {
            const { menuIsOpen } = props.selectProps
            return (
              <div className="mr-3">
                {menuIsOpen ? <ArrowUp /> : <ArrowDown />}
              </div>
            )
          },
        }}
        styles={{
          control: (style) => ({
            ...style,
            border: 0,
            paddingLeft: 6,
            boxShadow: 'none',
            height: '40px',
            borderRadius: 0,
          }),
          option: (styles, { isSelected }) => ({
            ...styles,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            color: '#413C5F',
            fontSize: 14,
            fontWeight: isSelected ? 600 : 400,
            ':nth-of-type(even)': {
              backgroundColor: '#F6F4FF',
            },
            backgroundColor: '#FFF',

            ':after': {
              content: isSelected ? `url(${Check})` : '" "',
              marginLeft: '8px',
              marginTop: '8px',
            },
          }),
          placeholder: (styles) => ({
            ...styles,
            color: '#C0BCDF',
            fontSize: 14,
          }),
        }}
      />
    </div>
  )
}

export default CountrySelector
