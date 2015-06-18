import org.junit.Assert;
import org.junit.Test;

public class StringReverserTest {
    @Test
    public void testReverseString() throws Exception {
        StringReverser sr = new StringReverser();
        Assert.assertEquals("cba", sr.reverseString("abc"));
        Assert.assertEquals("rqp1", sr.reverseString("1pqr"));
    }
}
