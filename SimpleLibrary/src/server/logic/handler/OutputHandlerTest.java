package server.logic.handler;

import static org.junit.Assert.*;

import org.junit.Test;

public class OutputHandlerTest {
	OutputHandler o;
	@Test
	public void test() {
		System.out.println(o.createUser("rob@carleton,pass"));
	}

}
