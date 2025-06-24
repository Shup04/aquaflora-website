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
    /* --- glow wrapper ---------------------------------------------------- */
    <div className="relative w-full max-w-xl mx-auto">
      {/* blurred gradient glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl bg-gradient-to-r
                   from-purple-500 via-indigo-500 to-cyan-400
                   opacity-40 blur-lg"
      />

      {/* actual MailerLite container -------------------------------------- */}
      <div
        id="mlb2-22055133"
        className="relative z-10 ml-form-embedContainer ml-subscribe-form
                   ml-subscribe-form-22055133 w-full rounded-2xl
                   bg-[#141414]/80 backdrop-blur p-6"
      >
        <div className="ml-form-embedWrapper embedForm">
          {/* body ---------------------------------------------------------- */}
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            {/* copy -------------------------------------------------------- */}
            <div className="ml-form-embedContent text-primaryText mb-6">
              <h2 className="text-2xl font-semibold mb-1">
                Join the AquaFlora mailing list
              </h2>
              <p className="text-sm font-montserrat text-neutral-400">
                Please use the email linked to your Google Play account.
              </p>
            </div>

            {/* form -------------------------------------------------------- */}
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
                      className="w-full h-12 px-4 rounded-lg font-montserrat
                                 bg-[#0d0d0d]/90 border border-[#222]
                                 text-white placeholder:opacity-60
                                 focus:border-purple focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              <input type="hidden" name="ml-submit" value="1" />

              {/* original subscribe button -------------------------------- */}
              <div className="ml-form-embedSubmit">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center
                             px-8 py-3 text-base md:text-lg font-medium
                             rounded-md bg-purple text-white
                             hover:text-primaryText border border-purple
                             hover:bg-transparent transition duration-300"
                >
                  Subscribe
                </button>
              </div>

              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>

          {/* success state ------------------------------------------------- */}
          <div
            className="ml-form-successBody row-success rounded-2xl
                       bg-[#141414]/80 p-6"
            style={{ display: 'none' }}
          >
            <div className="ml-form-successContent text-primaryText">
              <h4 className="text-2xl font-semibold">Thank you!</h4>
              <p className="text-sm font-montserrat">
                You have successfully joined our subscriber list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailerLiteForm
