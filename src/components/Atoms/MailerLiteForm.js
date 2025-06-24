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
      className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-22055133
             w-full max-w-xl rounded-2xl bg-[#141414]/80 backdrop-blur p-6 shadow-lg"
    >
      <div className="ml-form-embedWrapper embedForm">
        <div className="ml-form-embedBody ml-form-embedBodyDefault row-form rounded-lg border border-purple">
          <div className="ml-form-embedContent text-primaryText mb-6">
            <h2 className="text-2xl font-semibold mb-1">Join the AquaFlora mailing list</h2>
            <p className="text-sm text-neutral-400">
              Please use the email linked to your Google Play account.
            </p>
          </div>
          <form
            className="ml-block-form"
            action="https://assets.mailerlite.com/jsonp/771019/forms/144725400131470561/subscribe"
            method="post"
            target="_blank"
          >
            <div className="ml-form-formContent mb-4">
              <div className="ml-form-fieldRow ml-last-item">
                <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                  <input
                    aria-label="Email address"
                    aria-required="true"
                    type="email"
                    name="fields[email]"
                    placeholder="Email address"
                    autoComplete="email"
                    className="w-full h-12 px-4 rounded-lg bg-[#0d0d0d]/90
                               border border-[#222] text-white placeholder:opacity-60
                               focus:border-purple focus:ring-0"
                  />
                </div>
              </div>
            </div>
            <input type="hidden" name="ml-submit" value="1" />
            <div className="ml-form-embedSubmit">
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500
                           font-semibold tracking-wide transition hover:brightness-110"
              >
                Subscribe
              </button>
            </div>
            <input type="hidden" name="anticsrf" value="true" />
          </form>
        </div>
        <div
          className="ml-form-successBody row-success rounded-2xl bg-[#141414]/80 p-6 shadow-lg"
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
