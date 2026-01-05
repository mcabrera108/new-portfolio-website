import { useEffect, useState, type FormEvent } from "react";
import style from "../styles/layout.module.scss";
import { Alert, Stack } from "@chakra-ui/react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [notifMessage, setNotifMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  interface FormInterface {
    "form-name": string;
    name: string;
    email: string;
    message: string;
  }

  async function handleSubmission(e: FormEvent) {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    const encode = (data: FormInterface) => {
      return Object.keys(data)
        .map(
          (key) =>
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(data[key as keyof typeof formData])
        )
        .join("&");
    };

    try {
      setLoading(true);
      if (!name || !email || !message) {
        throw new Error("Please input valid fields!");
      }
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: name,
          email: email,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Error while submitting form. Please try again!");
      }
      setNotifMessage("Successfully submitted form!");
      setIsError(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(formData);
        setNotifMessage(error.message as string);
        setIsError(true);
      }
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifMessage(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [notifMessage]);
  return (
    <>
      {loading ? <div className={style.loading}></div> : <></>}

      <div className={style.contactContainer}>
        {notifMessage !== null ? (
          <Stack gap="4" width="full">
            <Alert.Root
              status={isError ? "error" : "success"}
              variant={"solid"}
              className={style.notificationMessage}
              padding={".5rem"}
            >
              <Alert.Indicator />
              <Alert.Title>{notifMessage}</Alert.Title>
            </Alert.Root>
          </Stack>
        ) : (
          <></>
        )}

        <div>
          <div className={style.contactDesc}>
            Looking to hire me for your next project?
          </div>
          <div className={`${style.contactTitle} ${style.gradient}`}>
            Contact Me
          </div>
          <div className={style.contactInfo}>
            through my{" "}
            <a
              href="https://www.linkedin.com/in/martin-cabrera-b83ab1148/"
              target="_blank"
            >
              LinkedIn
            </a>
            , or drop a message below:{" "}
          </div>
        </div>
        <form
          style={{ width: "100%" }}
          onSubmit={handleSubmission}
          name="contact"
        >
          <input type="hidden" name="form-name" value={"contact"} />
          <div className={style.formContainer}>
            <div className={style.formWrapper}>
              <div className={style.nameContainer}>
                <div className={style.inputContainer}>
                  <div>
                    <label htmlFor="name" className={style.inputLabel}>
                      Name{" "}
                    </label>
                  </div>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    className={style.inputField}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className={style.inputContainer}>
                  <div>
                    <label htmlFor="email" className={style.inputLabel}>
                      Email{" "}
                    </label>
                  </div>
                  <input
                    className={style.inputField}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div style={{ width: "100%", marginTop: "1rem" }}>
                <div>
                  <label htmlFor="message" className={style.inputLabel}>
                    Message:{" "}
                  </label>
                </div>
                <textarea
                  name="message"
                  id="message"
                  className={style.inputArea}
                  placeholder="Your Message..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  rows={10}
                ></textarea>
              </div>
              <div>
                <button
                  className={`${style.submitBtn} ${style.gradientRainbow}`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default ContactPage;
