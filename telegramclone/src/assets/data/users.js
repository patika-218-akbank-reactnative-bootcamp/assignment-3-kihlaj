const users = [
  {
    id: 1, username: 'bilgin', messages: [{
      text: "merhaba",
      // for sorting
      date: Date.now(),
    }]
  },
  { id: 2, username: 'erdem', messages: [] },
  { id: 3, username: 'behzat', messages: [] },
]

navigate("Chat", { user: { id: 1, username: 'bilgin', messages: [] } })

//render messages array(map)

// send message
// newMessage: "Merhaba"

setUsers(updatedUsers)

// input için tuttuğunuz state
const [message, setMessage] = useState("");
// context erişimi (degişken isimleri farklı olabilir)
const { users, setUsers } = useContext(UserContext)

// send message fonksiyonunun yapacağıni işlem, kurduğunuz yapıya göre değişebilir.
const sendMessage = () => {
  const newUsers = users.map(user => {
    // {id: 1, username: "atakan", messages: []}
    if (user.id === params.user.id) {
      const newMessages = user.messages.push({ text: "Merhaba", date: new Date.now() })
      return {
        ...user,
        messages: newMessages
      }
    } else {
      return user
    }
  })
  setUsers(newUsers)
}

const addMessages = (message) => { /* */
  const newMessages = [...messages, { 'from': 'me', 'text': message, 'date': Date.now() }];
}

return (
  <MessagesContext.Provider
    value={{ messages, setMessages, addNewMessages: add }}
  >
    {children}
  </MessagesContext.Provider>
)