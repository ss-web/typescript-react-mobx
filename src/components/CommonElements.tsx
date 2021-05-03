import styled from 'styled-components'


interface Props {
  center?: boolean;
  small?: boolean;
  show?: boolean;
  active?: boolean;
  red?: boolean;
  isForm2?: boolean;
  error?: boolean;
}

export const Container = styled.div`
  box-sizing: border-box;
  margin: 45px auto;
  padding: 0 45px;
  max-width: 1325px;
  width: 100%;
`

export const InputText = styled.input`
  border: 1px solid #c3ccd9;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 12px;
  outline: none;
  padding: 0 16px;
  height: 42px;
  width: 100%;

  &.error{
    border: 1px solid #b02337;
  }
`

// or use media
export const FromContainer = styled.div`
  display: grid;
  grid-gap: 12px 16px;
  grid-template-columns: 1fr 1fr;
  margin: 0 0 19px;
  width: 547px;

  ${(p:Props) => p.isForm2 && `
    grid-template-columns: 1fr;
    margin: 0 0 31px;
    grid-gap: 18px;
    width: 248px;
  `}
`

export const FormLinks = styled.div`
  cursor: pointer;
  display: flex;
`

export const FormStyle = styled.div`
  display: flex;
  font-weight: bold;
  margin: 0 30px 15px 0;
  font-size: 12px;

  ${(p:Props) => p.active && `
    text-decoration: underline;
  `}
`

export const From = styled.form`
  box-shadow: 0 .25rem .5rem rgba(0,0,0,.075);
  display: inline-flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 0 0 48px;
  padding: 19px 17px;
`

export const Button = styled.button`
  background: #1493ff;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  font-weight: bold;
  text-align: center;
  width: 100%;

  ${(p:Props) => p.center && `
    margin: auto;
  `}

  ${(p:Props) => p.small ? `
    font-size: 12px;
    height: 24px;
    max-width: 90px;
  ` : `
    font-size: 14px;
    height: 40px;
    max-width: 245px;
  `}
`

export const CloseModal = styled.div`
  cursor: pointer;
  svg{
    fill: #ffffff;
  }
`

export const CloseTable = styled.div`
  cursor: pointer;
  margin-left: 24px;
  svg{
    fill: #f04e34;
  }
`

export const CopySection = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  padding: 0 14px 13px;
  width: 100%;
`

export const TableConatiner = styled.div`
  max-width: 595px;
  width: 100%;

  & table{
    background: #fff;
    border-radius: 5px;
    border-spacing: 0;
    box-shadow: 0 .25rem .5rem rgba(0,0,0,.075);
    overflow: hidden;
    width: 100%;

    td, th {
      box-sizing: border-box;
      padding: 0 14px;
    }

    & thead{
      background: #0a508c;
      color: #a5b5cb;
      text-align: left;
      height: 29px;

      *{
        border: none;
        font-weight: normal;
        font-size: 14px;
      }
    }

    & tbody{
      tr{
        height: 30px;
      }

      td{
        border-left: 1px solid #c8ccd4;
        border-right: 1px solid #c8ccd4;
        border-bottom: 2px solid #c8ccd4;
        box-sizing: border-box;
      }
      & td:last-child {
        text-align: center;
        padding: 0;
        width: 190px;
      }

      tr:last-child {
        & td:last-child {
          border-radius: 0 0 5px;
        }

        & td:first-child {
          border-radius: 0 0 0 5px;
        }
      }

      *{
        border: none;
        font-weight: normal;
        font-size: 12px;
      }
    }
  }
`

// 25px
export const TableLink = styled.button.attrs({ type: 'button' })`
  background: transparent;
  cursor: pointer;
  color: #067ce1;
  text-decoration: underline;
  padding: 0;
  margin: 0 25px;

  ${(p:Props) => p.red && `
    color: #b02337;
  `}
`

export const Pmodal = styled.div`
  background: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  ${(p:Props) => !p.show ? `
    display: none;
  ` : `
    display: flex;
  `}
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  border: 1px solid #c3ccd9;
  margin-right: 12px;
  opacity: 0;
  position: relative;
  width: 24px;
  height: 24px;
  z-index: 1;

  &:checked + span{
    background: #c3ccd9;

    &:before{
      content: '✔';
      margin-bottom: 2px;
    }
  }
`

export const CheckboxCustomizer = styled.span`
  border-radius: 3px;
  position: absolute;
  left: 0;
  transition: .25s;
  height: 24px;
  width: 24px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  ${(p:Props) => p.error ? `
    border: 1px solid #b02337;
  ` : `
    border: 1px solid #c3ccd9;
  `}
`

export const CheckboxLabel = styled.label`
  align-items: center;
  display: flex;
  cursor: ponter;
  color: #868c96;
  font-size: 12px;
  position: relative;
`

export const Modal = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 .25rem .5rem rgba(0,0,0,.075);
  overflow: hidden;
  max-width: 537px;
`

export const Mcontainer = styled.form`
  padding: 31px 0 39px;
`

export const Mheader = styled.section`
  align-items: center;
  background: #393939;
  box-sizing: border-box;
  color: #fff;
  justify-content: space-between;
  display: flex;
  font-size: 12px;
  padding: 0 24px;
  height: 37px;
`

export const Mrow = styled.section`
  box-sizing: border-box;
  padding: 0 21px;
  display: flex;
  justify-content: space-between;
`

export const MrowFields = styled.section`
  padding: 0 21px 18px;
  grid-gap: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
