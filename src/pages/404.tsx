import * as React from "react";
import Link from "next/link";

export default function Page404() {
  return (
    <>
      <div className="Errorpage_Container">
        <div className="Errorpage_Wrapper">
          <div className="Errorpage_Text">
            <h2>404 | Not Found</h2>
            <p>
              We couldn't find the page that you were looking for, please
              contact support if you think there has been an error.
            </p>
            <div className="Global_Buttons">
              <div className="Global_Buttons_Wrapper">
                <Link href={"/"}>
                  <button className="Global_Button_Primary" type="button">
                    <span>Return Back</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
