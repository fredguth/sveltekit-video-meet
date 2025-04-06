// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

// Declare Socket.IO types
declare module 'socket.io-client' {
  interface SocketOptions {
    forceNode?: boolean;
  }
}
