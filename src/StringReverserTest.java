import org.junit.Test;
import org.junit.Assert;

public class StringReverserTest {
    @Test
    public void testReverseString() throws Exception {
        String solution = new StringReverser().reverseString("abc");
        Assert.assertEquals("cba", solution);
    }
}
