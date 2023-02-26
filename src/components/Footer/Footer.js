import { FaInstagram,FaGithub,FaGoogle } from "react-icons/fa";

import css from './Footer.module.css'

const Footer = () => {

    return (
  <div className={css.footer}>
      <div className={css.boxFooter}>
          <div>
              © 2022 Furnicom_lite. All Rights Reserved.
          </div>
          <div className={css.boxA}>
              <div className={css.icon}>
                  <a className={css.a} href="https://instagram.com/den_yaholnyk?igshid=YmMyMTA2M2Y=" target={"_blank"}>
                  <FaInstagram  size={'20px'}/>
              </a>
              </div>

              <div className={css.icon}>
                  <a className={css.a} href="mailto:yaholnykd@gmail.com"  >
                      <FaGoogle size={'20px'}/>
                  </a>
              </div>

              <div className={css.icon}>
                 <a href="https://github.com/denisgit122" className={css.a} target={"_blank"}  >
                     <FaGithub size={'20px'}/>
                 </a>
              </div>


          </div>

      </div>

  </div>
);
};

export {Footer};