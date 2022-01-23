import styled from 'styled-components';
import { colors, device, fonts } from '../App.styles';

export const StyledDiv = styled.div`
  max-width: 550px;
  margin: auto;
  margin-top: 4rem;
  padding: 2rem 2rem 1rem 2rem;
  background-color: ${colors.white2};
  box-shadow: ${colors.boxShadow1} 0px 3px 8px;
  transition: 0.3s;
  &:hover {
    box-shadow: ${colors.boxShadow2} 0px 7px 29px 0px;
  }
  .wrapper {
    width: 100%;
    position: relative;
    h2 {
      font-family: ${fonts.josefin};
      margin-top: 0.5rem;
      text-align: center;
    }
    form {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      input {
        width: 100%;
        background-color: ${colors.lightBlue};
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        padding: 0.5rem;
        border: none;
        box-shadow: inset ${colors.boxShadow1} 0px 0px 5px 1px;
        :focus {
          outline: none;
        }
      }
      .submit-btn {
        /* width: 5rem; */
        background-color: ${colors.blue};
        border: none;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        font-size: 1rem;
        cursor: pointer;
        color: ${colors.white};
        transition: 0.2s;
        :hover {
          box-shadow: inset ${colors.boxShadow1} 0px 0px 10px 3px;
          color: ${colors.black};
        }
      }
    }

    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.5rem;
      transition: 0.3s;
      transition: 0.5s;
      .value {
        white-space: nowrap;
        overflow: hidden;
        padding: 0;
        transition: 0.5s;
      }
      .show-list {
        overflow-wrap: break-word;
        width: 70%;
        padding: 0.5rem 0;
        transition: 0.5s;
      }
      .button-container {
        display: flex;
        button {
          display: flex;
          align-items: center;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 1.2rem;
          width: 30px;
          height: 30px;
          transition: 0.3s;
          :hover {
            opacity: 0.6;
          }
        }
        .edit-btn {
          color: ${colors.editBtnColor};
        }
        .delete-btn {
          color: ${colors.deleteBtnColor};
        }
        .read-more-btn {
          font-size: 2rem;
        }
        .read-more-btn-rotate {
          transform: rotate(180deg);
        }
      }
    }

    .alert {
      position: absolute;
      top: -45px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
      transition: 0.3s;
      color: ${colors.white};
    }
    .alert.danger {
      color: ${colors.alertDangerText};
      background-color: ${colors.alertDanger};
    }
    .alert.success {
      color: ${colors.green};
      background-color: ${colors.alertSuccess};
    }
    .clear-btn {
      display: block;
      margin: auto;
      margin-top: 1.5rem;
      width: 50%;
      border: none;
      font-size: 1rem;
      color: ${colors.alertDangerText};
      background: transparent;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 5px;
      letter-spacing: 0.2rem;
      :hover {
        color: ${colors.white};
        background: ${colors.alertDanger};
      }
    }
  }

  /* MEDIA */
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
`;
