import React, { useEffect } from "react"

const MailerLiteForm = () => {
  useEffect(() => {
    window.ml_webform_success_22055133 = function () {
      const $ = window.ml_jQuery || window.jQuery
      if ($) {
        $(".ml-subscribe-form-22055133 .row-success").show()
        $(".ml-subscribe-form-22055133 .row-form").hide()
      }
    }

    const script = document.createElement("script")
    script.src =
      "https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024"
    script.async = true
    document.body.appendChild(script)

    fetch(
      "https://assets.mailerlite.com/jsonp/771019/forms/144725400131470561/takel",
    ).catch(() => {})

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      id="mlb2-22055133"
      className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-22055133"
    >
      <div className="ml-form-embedWrapper embedForm">
        <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
          <div className="ml-form-embedContent text-primaryText mb-4">
            <h4 className="text-2xl font-semibold">Sign Up</h4>
            <p className="text-sm">Signup for the AquaFlora mailing list.</p>
            <p className="text-sm">
              Please use the email that is linked to your google play account.
              <br />
            </p>
          </div>
          <form
            className="ml-block-form"
            action="https://assets.mailerlite.com/jsonp/771019/forms/144725400131470561/subscribe"
            method="post"
            target="_blank"
          >
            <div className="ml-form-formContent">
              <div className="ml-form-fieldRow ml-last-item">
                <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                  <input
                    aria-label="email"
                    aria-required="true"
                    type="email"
                    className="px-2 py-2 font-montserrat rounded-lg bg-inputBG bg-opacity-20 border-transparent flex-1 appearance-none text-white focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent w-full"
                    name="fields[email]"
                    placeholder="Email"
                    autoComplete="email"
                  />
                </div>
              </div>
            </div>
            <input type="hidden" name="ml-submit" value="1" />
            <div className="ml-form-embedSubmit">
              <button
                type="submit"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-primaryText border border-purple hover:bg-transparent md:text-lg md:px-10"
              >
                Subscribe
              </button>
            </div>
            <input type="hidden" name="anticsrf" value="true" />
          </form>
        </div>
        <div
          className="ml-form-successBody row-success"
          style={{ display: "none" }}
        >
          <div className="ml-form-successContent text-primaryText">
            <h4 className="text-2xl font-semibold">Thank you!</h4>
            <p className="text-sm">
              You have successfully joined our subscriber list.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailerLiteForm
